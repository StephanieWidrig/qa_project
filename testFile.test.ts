

test("Add To Cart Test", async () => {
    await myTest.navigate()
    await myTest.click(gearBtn)
    await myTest.click(glovesBtn)
    await myTest.click(glovesChoiceBtn)
    await myTest.click(addToCartBtn)
    let response = await myTest.getText(myTest.results)
    expect(response).not.toContain('The "Header" field should be between 9 and 19 characters long.')

    test("Contact Us Test", async () => {
        await myTest.navigate()
        await myTest.click(contactUsBtn)
        await myTest.setInput(firstNameInput2, "Taylor")
        await myTest.setInput(lastNameInput2, "Greer")
        await myTest.setInput( emailInput2, "TaylorBGreer@gmail.com")
        await myTest.select(categoryBtn)
        await myTest.click(categoryOptionBtn)
        await myTest.setInputDescription( descriptionInput)
        await myTest.click(submitBtn)
        let response = await myTest.getText(myTest.results)
        expect(response).not.toContain('The "Header" field should be between 9 and 19 characters long.')