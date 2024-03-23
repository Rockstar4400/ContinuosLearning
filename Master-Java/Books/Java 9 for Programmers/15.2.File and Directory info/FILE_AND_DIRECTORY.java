 
import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;

public class FILE_AND_DIRECTORY {
    
    public static void main(String[] args) throws IOException{
    	Scanner input = new Scanner (System.in);
    	
    	System.out.println("Enter file or directory name:");
    	
    	//Create Path object based on user input
    	Path path = Paths.get(input.nextLine());
    	
    	if(Files.exists(path)){// If path exists, output info about it
    	// display file (or directory)information
		System.out.printf("%n%s exists%n",path.getFileName());
		
		if(Files.isDirectory(path)){//output directory listing
		System.out.printf("%nDirectory contents:%n");
			
			//object for iterating through a directory's contents
			DirectoryStream<Path> directoryStream =
				Files.newDirectoryStream(path);
			
			for(Path p: directoryStream){
			System.out.println(p);	
				}
			}
		}
		else{
			System.out.printf("%s does not exist%n",path);			
		}
    }
}
