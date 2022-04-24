/**
 * Writing notes for React basics
 * 
 * React 17.0.2
 * Node 16.14.0
 * 
 * 1. Component based:build encapsulated components that manage their own state and result into complex UI, 
 *  DO not repeat yourself.
 * 2. Functional component should always return in component to render
 * 
 * 3. Rules to write JSX
 *  - Component should return only one div not multiple things.
 * eg return (<div></div> or <></>)
 *  - <h1 className=""></h1>
 *  - Tag should be closed
 * 
 *                                          ***********IMPORTANT***********
 *                                          *******************************
 *  * 4. React Hooks
 *  ------------- useStateHooks() ------------------
 *      -> to get the data and hold it or to manage data
 *      -> it returns array of two element
 *      -> const[stateVariable (It is a Variable) , setMenuData (this is a function , which will update variable)] = useState(updatedFunction or to change value of state , eg menuData);
 * 
 * Hooks are used to manage your state in component.
 * 
 * -------------- useEffect() -------------------------
 *     * By using this Hook, you tell React that your component needs to do something after render.
 *     * It runs after every render
 *     - useEffect(() => {
 *          console.log("Hi");    or document.title = `${myNum}`
 *      }, []) 
 *      NOTE: if we remove array dependency , it will always run if we do any change or click in component.
 * 
 *  ------------------ useReducer ------------------------
 *      /**
            * dispatch is used to trigger your reducer function() and reducer will have the updated function through which we can change the value of state.
        */
    // const [state, dispatch] = useReducer(reducer, initialData);
 
 
/*  
 * 
 * 
 * *****Autocomplete tags ******
 *  open settings in vs code : "emmet.includeLanguages":{"javascriptreact"}
 */




//********** REACT IMPORTANT COMMANDS ***************/

/**
 * 1. npm create-react-app <app-name>
 * 2. rafce : reactArrowFunctionExportComponent
 * 
 */
