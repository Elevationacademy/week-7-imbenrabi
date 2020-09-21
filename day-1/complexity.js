/**ex 01
 * O(n) given that the question refers to the complexity of getBalance,
 */

/**ex o2
 * O(log(n)).
 */

/**ex 03
 * O(1)
 */

/**ex 04
 * O(mn) given that the studentAnswers studentGithubs are not constants in the code,
 */

/**ex 05
 *O(n)
 */

/**ex 06 */
const findDuplicates = function (ages) {
    for (let i = 0; i < ages.length; i++) {
        const indexHistoryObject = {};

        for (let j = i + 1; j < ages.length; j++) {
            if (indexHistoryObject[ages[i]]) {
                continue;
            }

            if (ages[i] === ages[j]) {
                indexHistoryObject[ages[i]] = true;
                console.log(`${ages[i]} has a duplicate`)
            }
        }
        //note that this *entire* inner loop runs for each iteration of i
    }
}
