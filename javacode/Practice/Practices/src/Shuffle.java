import java.util.ArrayList;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Shuffle {
	public static void main(String[] args) {
		
		 
         List<Integer> myList = new ArrayList<>(Arrays.asList(1,2,3,4,5,6,7));
         Collections.shuffle(myList);
         System.out.println("Shuffled array:= " + myList);
    }
	
	}


