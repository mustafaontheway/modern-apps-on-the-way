fun main() {
    
    val pi= "3.14" 
    
    val radius = 5
    
	val piD = pi.toDoubleOrNull() 
    
    if (piD != null) {
        
        println("Area: ${piD * radius * radius}")
        
    } else {
        
        println("Unexpected error!")
    }
   
}

// Area: 78.5
