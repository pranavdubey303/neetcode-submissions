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
     * @return {number}
     */
    maxDepth(root) {

        function maxdepthRec(node) {


            if(!node) {
                return 0;
            }

            let left = maxdepthRec(node.left);

            let right = maxdepthRec(node.right);

            return Math.max(left,right) + 1; 

        }

return maxdepthRec(root);



    }
}
