export default function generateRandom(n, output){
    var randoms = Array.from(Array(n).keys())
    var empt = {}

    function removeArrayItem(i){
        var val = randoms.pop()
        if(i < randoms.length){
            randoms[i] = val
        }
    }

    function makeRandom(){
        var rand = randoms[Math.floor(Math.random() * randoms.length)]
        removeArrayItem(rand)
        return rand
    }

    return Array.from({length: output}, (_, i) =>  makeRandom())
}