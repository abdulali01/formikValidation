# formikValidation

Introduction to the Project:

While it is a simple email and password validation, it is a start that will be connected to the future projects.
Installation Instructions:

App.js is the main file where the informtion is stored and it is like an engine!!  You want to make sure your engine is working and looking good.  
I will continue to work on cosmetic things that will present the information in the most effective way.

Examples and common use cases.
1. Validation to ensure email is standard.  What does it mean?  Checking the @ sign, dot co, com, edu etc.
2. App.js is the key file. Snippet below from the code.  Feel free to review the App.js file for details.

validate: values => {
      let errors = {};
      if(!values.emailField){
      errors.email ='Required';
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.email = 'Username should be an email';  /* you can use it with different type of message.*/
      }
      if(!values.pswField) errors.password ='Required'; /* simple validating to ensure it is is not blank.*/

      return errors;
    }


Project's license.
1. Node.js need to be installed on your machine.  Ensure you're able to run your first or one of many projects.
2. Personal learning recommendation - Get use to NPM commands.  :-)
3. Visual Studio to manage code (may need a license for it unless used free).
4. You can choose any software to manage it as long as you're able to run node.js, NPM commands.
   
Next Projection Changes:
Showcase how to integration this simply with complex application.  Continue to enhance it.
Make improvment to the App.js file and add functionality.  
