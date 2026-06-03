/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {

let result =[];

        function invert(node) {

            if(!node) {
                return;
            }



            let temp = node.left;
            node.left = node.right;
            node.right = temp;

            invert(node.left);

            invert(node.right);


        }


     invert(root);

     return root;


    }
}
