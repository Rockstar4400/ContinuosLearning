
import java.util.stream.Stream;

/*
 * Core Java SE 9 for the impatient : Counter words from
 * text > 12 characters
 * 
*/

public class arrayStreamExample {
    public static void main(String[] args) {

    Stream<String> song = Stream.of(
        "gently", "down", "the", "stream");

    System.out.println(song);
    
    }
}
