/*~~~~~~~~~~~~Question~~~~~~~~~~~~~
Given an m x n matrix, return all elements of the matrix in spiral order.

~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~

1. So the order it needs to happen is
    1a. First array needs to clear completely (destructure or multiple shifts)
    1b. All other arrys lose their last value (pop)
    1c. Last array clears in reverse order (multiple pops)
    1d. All arrays lose their first value (multiple shifts)
    1e. Repeat from a
2. I couldn't figure out a good implementation in an hour, so I fell on researching and came up with what's below. I'll comment 
it to help my own understanding



*/

var spiralOrder = function(matrix) {
        
    let mat = JSON.parse(JSON.stringify(matrix)) //A copy of the input so we don't manipulate it directly
    let out = [] // Output array

        while(mat.length){ //while the array still has arrays in it
          const first = mat.shift() //This moves the entire first array into a separate var.
                                    //This is clever because it also removes the entire array, changing the length property of mat
          out.push(...first) //This destructures the values of the first array and puts them into the output
          for(const m of mat){ //For every array remaining in the matrix
            let val = m.pop() //Puts the value in the last index into a separate var
            if(val !== undefined)   //This check is important to stop errors. It will only try to execute 
                                    //if the push above returns a value
                                    //but not if it returns undefined or 0
              out.push(val) //push the value if found
              m.reverse()   //This is an interesting choice. By reversing both arrays individually, and then reversing
                            //the matrix, it allows you to start from the top of the loop and reuse the logic.
        /*Example step by step
            1 2 3
            4 5 6
            7 8 9

            4 5 6
            7 8 9
            
            5 4
            8 7

            8 7
            5 4

            5 4

            5

            */
          }
          mat.reverse()
        }


        return out
};