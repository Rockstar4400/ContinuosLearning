import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class AnchorBounds {
    public static void main(String[] args) {
        Pattern p = Pattern.compile("<java>*");
        Matcher m = p.matcher("<vb><c++><java><c++>");
        m.useAnchoringBounds(true);
        System.out.println("Has Anchoring Bounds: " + m.hasAnchoringBounds());
        while(m.find()){
            System.out.println(" " + m);
        }
    }
}
