class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {


        if(s === '') {
            return false;
        }

        let stack = [];

        for(let i = 0 ; i < s.length ;i++) {

            if(s[i] === '(' || s[i] === '{' || s[i] === '[') {

                stack.push(s[i]);

       
            } else {

      let opening = stack.pop();

                if (
                    (s[i] === ')' && opening !== '(') ||
                    (s[i] === '}' && opening !== '{') ||
                    (s[i] === ']' && opening !== '[')
                ) {
                    return false;
                }
        
    }


        }
        
        
                return stack.length === 0;

        
        }
}
