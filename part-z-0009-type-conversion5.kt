fun main() {
    
    val pi= "3.14 x" 
    
    val radius = 5
    
	val piD = pi.toDoubleOrNull() 
    
	piD?.let {
        
        println("Area: ${piD * radius * radius}")
    }
}
