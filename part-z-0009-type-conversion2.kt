fun main() {
    
    var b = "245.22 ."
    
    try {
      
        val bNew = b.toInt()
        
        println(bNew + 11.87)
        
    } catch(nfe: NumberFormatException) {
        
        println("Not a number!")
    }
   
}

// Not a number!
