fun main() {
    
    val pi= "3.14" 
    
    val radius = 5
    
    try {
        
        println("Area: ${pi.toDouble() * radius * radius}")
        
    } catch(nfe: NumberFormatException) {
        
        println("Not a number!")
    }
   
}

// Area: 78.5
