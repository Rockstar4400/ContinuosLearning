import java.util.LinkedList;

class deleteDigit {

    public static int deleteDigitMethod (int n){
        int numMax = 0;
        String snum = Integer.toString(n);
        LinkedList<Integer> anum = new LinkedList<>();
        for (int i = 0; i < snum.length(); i++)
        {
            anum.add(Integer.valueOf(snum.charAt(i)));
        }

        for(int x = 0; x < anum.size(); x++ ){
            
            LinkedList<Integer> bnum = new LinkedList<>();
            for (int i = 0; i < snum.length(); i++)
            {
                bnum.add(Integer.valueOf(snum.charAt(i)));
            }
            bnum.remove(x);

            StringBuilder sb = new StringBuilder();
            for(int y = 0; y < bnum.size(); y++ ){
                sb.append(Character.getNumericValue(bnum.get(y)));   
            }
            int val = Integer.valueOf(sb.toString());
            if(val > numMax ){
                numMax = val;
            }
        }
        
        return numMax;
    }

    public static void main(String[] args) {
        System.out.println(deleteDigitMethod(152));
        System.out.println(deleteDigitMethod(1001));
        System.out.println(deleteDigitMethod(10));
        System.out.println(deleteDigitMethod(222219));
        System.out.println(deleteDigitMethod(109));
    }
}