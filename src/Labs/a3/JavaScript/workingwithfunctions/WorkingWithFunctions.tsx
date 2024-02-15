import ES5Functions from "../functions/ES5Functions";
import ArrowFunctions from "../functions/ArrowFunctions";
import ImpliedReturn from "../functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "../functions/FunctionParenthesisAndParameters";

function WorkingWithFunctions(){
    return(
        <div>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
        </div>
    )
}

export default WorkingWithFunctions;