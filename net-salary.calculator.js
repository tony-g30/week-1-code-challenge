/*a program that calculates an individual’s Net Salary by getting the inputs of basic salary and benefits. 
Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.
*/

function calculate_net_salary(){

    if (isNaN(basicSalary) || basicSalary < 0 || isNaN(benefits) || benefits < 0) {
        console.log("Please enter valid numbers for basic salary and benefits.");
        return;
    }

    // declaration for NSSF and NHIF rates
    const nssfRate = 0.06; // NSSF rate (6%)
    const maxNssf = 36000 * nssfRate; // Maximum NSSF deduction is 6% of 18000

    //calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate NSSF deduction
    const nssfDeduction = Math.min(grossSalary * nssfRate, maxNssf);

    let nhifDeduction = 0;

    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } 
    else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } 
    else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } 
    else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } 
    else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } 
    else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } 
    else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } 
    else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } 
    else if (grossSalary <= 39999) {
        nhifDeduction = 950;
    } 
    else if (grossSalary <= 44999) {
        nhifDeduction = 1000;
    } 
    else if (grossSalary <= 49999) {
        nhifDeduction = 1100;
    } 
    else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
    } 
    else if (grossSalary <= 69999) {
        nhifDeduction = 1300;
    } 
    else if (grossSalary <= 79999) {
        nhifDeduction = 1400;
    } 
    else if (grossSalary <= 89999) {
        nhifDeduction = 1500;
    } 
    else if (grossSalary <= 99999) {
        nhifDeduction = 1600;
    } 
    else {
        nhifDeduction = 1700;
    }

    //calculate paye
    const taxableIncome = grossSalary - nssfDeduction;
    let payeTax = 0;

    if (taxableIncome <= 24000) {
        payeTax = taxableIncome * 0.1;
    } 
    else if (taxableIncome <= 32333) {
        payeTax = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
    } 
    else if(taxableIncome <= 500000){
        payeTax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((taxableIncome - 32333) * 0.3);
    }
    else if(taxableIncome <= 800000){
        payeTax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((taxableIncome - 32333) * 0.3) + ((taxableIncome - 500000) * 0.325);
    }
    else{
        payeTax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((taxableIncome - 32333) * 0.3) + ((taxableIncome - 500000) * 0.325) + ((taxableIncome - 800000) * 0.35);
    }
    
    const netSalary = grossSalary - nssfDeduction - nhifDeduction - payeTax;

    //display the calculated values

    console.log(`Gross Salary: ${grossSalary.toFixed(2)}
    NSSF Deduction: ${nssfDeduction.toFixed(2)}
    NHIF Deduction: ${nhifDeduction.toFixed(2)}
    PAYE Tax: ${payeTax.toFixed(2)}
    Net Salary: ${netSalary.toFixed(2)}`);
}

// Prompt for basic salary and benefits values and they are converted to floating point numbers.
let basicSalary = parseFloat(prompt("Enter basic salary:  "));
let benefits = parseFloat(prompt("Enter benefits:"));

calculate_net_salary(basicSalary, benefits);//calling the function