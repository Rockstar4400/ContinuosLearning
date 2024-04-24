//int solution(int n, int firstNumber) {
//    if(n >= 4 && n <=20 && firstNumber >= 0 && firstNumber <= n-1){
//        return (firstNumber +n/2)%n;
//    }
//}

fun solution (n:Int, firstNumber: Int ): Int {
    var bool: Boolean = false

    if(!bool == n >= 4 && n <= 20 && firstNumber >= 0 && firstNumber <= n-1)
        return firstNumber + n/2;
    return 0;
}

fun main(args : Array<String>) {
    println(solution(18,5));
    println(solution(12,10));// 4
}