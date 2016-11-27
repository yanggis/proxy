 package predator.vps.crawler.parser.impl;

import predator.vps.crawler.model.ProxyModel;
import predator.vps.crawler.net.Config;
import predator.vps.crawler.net.HttpClientUtils;
import predator.vps.crawler.parser.AParser;
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author Mike
 * @project predator-vps-crawler
 * @date 9/18/16, 2:46 PM
 * @e-mail mike@mikecoder.cn
 */
public class SDParser extends AParser {

    private static final String regex   = "decrypt\\(\"(.*?)\"\\)";
    private static final String ivRegex = "baidu_union_id = \"(.*?)\";";

    protected ArrayList<ProxyModel> parse(String htmlContent) {
        ArrayList<ProxyModel> res = new ArrayList<ProxyModel>();
        String iv = "";
        Pattern pattern = Pattern.compile(ivRegex);
        Matcher matcher = pattern.matcher(htmlContent);
        while (matcher.find()) {
            iv = matcher.group(1);
        }
        pattern = Pattern.compile(regex);
        matcher = pattern.matcher(htmlContent);
        while (matcher.find()) {
            String encrypt = matcher.group(1);
            try {
                String decrypt = AESPlus.decrypt(iv, encrypt, iv, AESPlus.ZERO_CBC_PADDING);
                ProxyModel proxyModel = new ProxyModel();
                String[] proxy = decrypt.split(":");
                proxyModel.setIp(proxy[0].trim());
                proxyModel.setPort(Integer.valueOf(proxy[1].trim()));
                proxyModel.setRates(new int[20]);
                res.add(proxyModel);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return res;
    }

    static class AESPlus {

        public static final String ZERO_CBC_PADDING     = "AES/CBC/NoPadding";
        public static final String PKCS5_CBC_PADDING    = "AES/CBC/PKCS5Padding";
        public static final String ISO10126_CBC_PADDING = "AES/CBC/ISO10126Padding";

        public static String encrypt(String strKey, String strIn, String strIV, String strPadding)
                throws Exception
        {
            SecretKeySpec skeySpec = getKey(strKey);
            Cipher cipher = Cipher.getInstance(strPadding);
            IvParameterSpec iv = new IvParameterSpec(strIV.getBytes());
            cipher.init(Cipher.ENCRYPT_MODE, skeySpec, iv);
            byte[] encrypted = cipher.doFinal(strIn.getBytes());

            return new BASE64Encoder().encode(encrypted);
        }

        public static String decrypt(String strKey, String strIn, String strIV, String strPadding)
                throws Exception
        {
            SecretKeySpec skeySpec = getKey(strKey);
            Cipher cipher = Cipher.getInstance(strPadding);
            IvParameterSpec iv = new IvParameterSpec(strIV.getBytes());
            cipher.init(Cipher.DECRYPT_MODE, skeySpec, iv);
            byte[] encrypted1 = new BASE64Decoder().decodeBuffer(strIn);

            byte[] original = cipher.doFinal(encrypted1);
            return new String(original);
        }

        private static SecretKeySpec getKey(String strKey) throws Exception {
            byte[] arrBTmp = strKey.getBytes();
            byte[] arrB = new byte[16]; // 创建一个空的16位字节数组（默认值为0）

            for (int i = 0; i < arrBTmp.length && i < arrB.length; i++) {
                arrB[i] = arrBTmp[i];
            }

            return new SecretKeySpec(arrB, "AES");
        }
    }

    public static void main(String[] args) throws Exception {
        String html = HttpClientUtils.getContentByUrl(Config.VPS_LIST_URL[1]);
        System.out.println(html);
        SDParser sdParser = new SDParser();
        System.out.println(sdParser.parse(html));
    }
} 
