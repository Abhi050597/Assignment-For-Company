import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Panagram {

	public static void main(String[] args) {
	    
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter String ");
		
		String sentence = sc.nextLine();
		
	    String sent= sentence.replaceAll(" ","").toLowerCase();
	 
	    Set<Character> set= new HashSet<>();
	   for(int i=0; i<sent.length();i++)
	   {
		   set.add(sent.charAt(i));
	   }
	   if(set.size()==26)
		   System.out.println(sentence +":=> is panagram");
	   else
		   System.out.println(sentence +":=>is not panagram");

	}

}
