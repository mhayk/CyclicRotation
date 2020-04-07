function solution(A, K) {
    if(!A.length)
        return []

    for(let i=0; i < K; i++) {
        const tail = A[A.length - 1]
        A.pop()
        A.unshift(tail)
    }
    return A
}