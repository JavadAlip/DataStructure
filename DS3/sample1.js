// class Node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.right=null
//     }
// }

// class binarysearchtree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//     let newnode=new Node(data)
//     let current=this.root
//     if(current==null){
//         this.root=newnode
//         return
//     }
//     while(true){
//         if(data<current.data){
//             if(current.left==null){
//                 current.left=newnode
//                 break;
//             }else{
//                 current=current.left
//             }
//         }else{
//             if(current.right===null){
//                 current.right=newnode
//                 break;
//             }else{
//                 current=current.right
//             }
//         }
//     }
// }
// }


// class node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.rigth=null
//     }
// }

// // class binary{
// //     constructor(){
// //         this.root=null
// //     }
// //     insert(data){
// //         let newnode=new node(data)
// //         let current=this.root
// //         if(current==null){
// //             this.root=current
// //             return
// //         }
// //         while(true){
// //             if(data<current.data){
// //                 if(current.left==null){
// //                     current.left=newnode
// //                     break;
// //                 }else{
// //                     current=current.left
// //                 }
// //             }
// //         }


// //     }
// // }


// // class binary{
// //     constructor(){
// //         this.root=null
// //     }
// //     insert(data){
// //         let newnode=new node(data)
// //         let current=this.root
// //         if(current==null){
// //             this.root=newnode
// //             return
// //         }
// //         while(true){
// //             if(data<current.data){
// //                 if(current.left==null){
// //                     current.left=newnode
// //                     break
// //                 }else{
// //                     current=current.left
// //                 }
// //             }
// //             else{
// //                 if(current.right==null){
// //                     current.right=newnode
// //                 }else{
// //                     current=current.right
// //                 }
// //             }
// //         }
// //     }
// // }

// class node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.rigth=null
//     }
// }

// // class binary{
// //     constructor(){
// //         this.root=null
// //     }
// //     insert(data){
// //         let newnode=new node(data)
// //         let current=this.root
// //         if(current==null){
// //             this.root=newnode
// //             return;
// //         }
// //         while(true){
// //             if(data<current.data){
// //                 if(current.left==null){
// //                     current.left=newnode
// //                     break;
// //                 }
// //                 else{
// //                     current=current.left
// //                 }
// //             }
// //             else{
// //                 if(current.right==null){
// //                     current.right=newnode
// //                     break;
// //                 }else{
// //                     current=current.right
// //                 }
// //             }
// //         }
// //     }
// // }


// class binary{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let newnode=new node(data)
//         let current=this.root
//         if(current==null){
//             this.root=newnode
//             return;
//         }
//         while(true){
//             if(data<current.data){
//                 if(current.left==null){
//                     current.left=newnode
//                     break;
//                 }else{
//                     current=current.left
//                 }
//             }
//             else{
//                 if(data>current.data){
//                     if(current.right==null){
//                         current.right=newnode
//                         break;
//                     }else{
//                         current=current.right
//                     }
//                 }
//             }
//         }

//     }
// }


// // // contains---------------------------
// // contains(data){
// //     let current=this.root
// //     while(current!=null){
// //         if(data<current.data){
// //             current=current.left
// //         }else if(data>current.data){
// //             current=current.right
// //         }
// //         else{
// //             return true
// //         }
// //     }
// //     return false
// // }


// class binary{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let newnode=new node(data)
//         let current=this.root
//         if(current==null){
//             this.root=newnode
//         }
//         while(true){
//             if(data<current.data){
//                 if(current.left==null){
//                     current.left=newnode
//                     break;
//                 }else{
//                     current=current.left
//                 }
//             }
//             else{
//                 if(data>current.data){
//                     if(current.right==null){
//                         current.right=newnode
//                         break;
//                     }else{
//                         current=current.right
//                     }
//                 }
//             }
//         }


//     }
// }

// contais(data){
//     let current=this.root
//     while(current!=null){
//         if(data<current.data){
//             current=current.left

//         }
//         else if(data>current.data){
//             current=current.right
//         }
//         else{
//             return true
//         }
//     }
//     return false
// }


// class node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.rigth=null
//     }
// }

// class binary{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let newnode=new node(data)
//         let current=this.root
//         if(current==null){
//             this.root=newnode
//             return;
//         }
//         while(true){
//             if(data<current.data){
//                 if(current.left==null){
//                     current.left=newnode
//                     break;
//                 }else{
//                     current=current.left
//                 }
//             }else{
//                 if(current.right==null){
//                     current.right=newnode
//                     break;
//                 }else{
//                     current=current.right
//                 }
//             }
//         }
//     }

//     contains(data){
//         let current=this.root
//         while(current!=null){
//             if(data<current.data){
//                 current=current.left
//             }else if(data>current.data){
//                 current=current.right
//             }
//             else{
//                 return true
//             }
//         }
//         return false
//     }


//     preorder(){
//         this.preorderhelp(this.root)
//     }
//     preorderhelp(node){
//         if(node!=null){
//             console.log(node.data)
//             this.preorderhelp(node.left)
//             this.preorderhelp(node.right)
//         }
//     }

   
//     postorder(){
//         this.postorderhelp(this.root)
//     }
//     postorderhelp(node){
//         if(node!=null){
//             this.postorderhelp(node.left)
//             this.postorderhelp(node.right)
//             console.log(node.data)
//         }
//     }

//     inorder(){
//         this.inorderhelp(this.root)
//     }
//     inorderhelp(node){
//         if(node!=null){
//             this.inorderhelp(node.left)
//             console.log(node.data)
//             this.inorderhelp(node.right)
//         }
//     }

//     // closest(target){
//     //     let current=this.root
//     //     let closest=current
//     //     while(current!=null){
//     //         if(Math.abs(target-closest-data)>(Math.abs(target-current.data))){
//     //             closest=current
//     //         }
//     //         if(target<current.data){
//     //             current=current.left
//     //         }else if(target>current.data){
//     //             current=current.right
//     //         }else{
//     //             break
//     //         }
//     //     }
//     //     return closest.data
//     // }

//     closest(target){
//         let current=this.root
//         let close=current
//         while(current!=null){
//             if(Math.abs(target-close.data)>(Math.abs(target-current.data))){
//                 close=current
//             }
//             if(target<current.data){
//                 current=current.left
//             }else if(target>current.data){
//                 current=current.right
//             }else{
//                 break
//             }
//         }
//         return close.data
//     }
// }
// let javad=new binary()
// javad.insert(10)
// javad.insert(20)
// console.log(javad.contains(170))


class node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null

    }
}
class binary{
    constructor(){
        this.root=null
    }
    insert(data){
        let newnode=new node(data)
        let current=this.root
        if(current==null){
            this.root=newnode
            return;
        }
        while(true){
            if(data<current.data){
                if(current.left==null){
                    current.left=newnode
                    break;
                }else{
                    current=current.left
                }
            }
            else{
                if(data>current.data){
                    if(current.right==null){
                        current.right=newnode
                        break;
                    }
                    else{
                        current=current.right
                    }
                }
            }
        }
    }



    contains(data){
        let current=this.root
        while(current!=null){
            if(data<current.data){
                current=current.left
            }else if(data>current.data){
                current=current.right
            }else{
                return true
            }
        }
        return flase
    }



    preorder(){
        this.preorderhelper(this.root)
    }
    preorderhelper(node){
        if(node!=null){
            console.log(node.data)
            this.preorderhelper(node.left)
            this.preorderhelpera(node.right)
        }
    }


    postorder(){
        this.postorderhelper(this.root)
    }
    postorderhelper(node){
        if(node!=null){
            this.postorderhelper(node.left)
            this.postorderhelper(node.right)
            console.log(node.data)
        }
    }

    inorder(){
        this.inorderhelper(this.root)
    }
    inorderhelper(node){
        if(node!=null){
            this.inorderhelper(node.left)
            console.log(node.data)
            this.inorderhelper(node.right)
        }
    }

    closest(target){
        let current=this.root
        let close=current
        while(current!=null){
            if(Math.abs(target-close.data)>(Math.abs(target-current.data))){
                close=current
            }
            if(target<current.data){
                current=current.left
            }else if(target>current.data){
                current=current.right
            }
            else{
                break;
            }
        }
        return close.data
    }
}


