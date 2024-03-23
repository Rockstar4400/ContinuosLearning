import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

/*
 * Core Java SE 9 for the impatient : Counter words from
 * text > 12 characters long
 * 
*/

public class collectionStreamExample {
    public static void main(String[] args) throws IOException {
    Path currentRelativePath = Paths.get("");
    String s = currentRelativePath.toAbsolutePath().toString();
    
    String contents = new String(Files.readAllBytes(
    Paths.get(s + "\\Books\\Core Java 9 for the impatient\\8.Streams\\text.txt"
        )), StandardCharsets.UTF_8);

    List<String> words = List.of(contents.split("\\PL+"));

    long count = words.stream()
    .filter(w -> w.length() > 12).count();

    System.out.println(count);
    }
}
