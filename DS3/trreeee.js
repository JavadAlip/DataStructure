class trienode{
    constructor(){
        this.children=new Map()
    }
}
class trie{
    constructor(){
        this.root=new trienode()
        this.endsymbol="*";
    }
    sufix(str){
        for(let i=0;i<str.length;i++){
            this.insert(str,i)
        }
    }
    insert(str,idx){
        let node=this.root
        for(let i=idx;i<str.length;i++){
            if(!node.children.has(str[i])){
                node.children.set(str[i],new trienode())
            }
            node=node.children.get(str[i])
        }
        node.children.set(this.endsymbol,null)
    }

contains(str){
    let node=this.root
    for(let i=0;i<str.length;i++){
        let letter=str[i]
        if(!node.children.has(letter)){
            return false
        }
        node=node.children.get(letter)
    }
    return node.children.has(this.endsymbol)
}
}
let tr=new trie()
tr.sufix("irshad")
console.log(tr.contains("had"));

