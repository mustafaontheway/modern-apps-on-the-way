var globalX = "22 + 44 = 66"

fun main() {
    
    var x = 22 
    
    println(x) 
    
    fool() 
    
    println(globalX)
   
}

fun fool() {
    
    var x = "Hi there!"
    
    println(x)
    
    println(globalX)
}

// 22
// Hi there!
// 22 + 44 = 66
// 22 + 44 = 66
