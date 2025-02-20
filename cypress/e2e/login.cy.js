describe("First Test", () => {

    beforeEach(() => {
        //cy.visit("about:blank")
        cy.document().then((doc) => {
        doc.body.innerHTML = `

                <form id="loginForm">
                    <label for="username">Username:</label>
                    <input type="test" id="username" name="username" placeholder="Enter Your Name" required/>
                    
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter Your Password" required/>

                    <button type="button" id="loginBtn">Login</button>
                </form>

                <p id="message"></p>    
            `

                    const loginLogic = () => {
                        let username = doc.getElementById("username").value
                        let password = doc.getElementById("password").value
                        let message = doc.getElementById("message")

                        if (username === "admin" && password === "admin123") {
                            message.textContent = "Login Successful"
                            message.style.color = "green"
                        } else {
                            message.textContent = "Invalid Username and Password"
                            message.style.color = "red"
                        }
                    }
                doc.getElementById("loginBtn").addEventListener("click", loginLogic)
        })
    })

    it("Login Successful", () => {
        cy.get("#username").type("admin")
        cy.get("#password").type("admin123")
        cy.get("#loginBtn").click()
        //cy.contains("Login Successful")
        //cy.get("#message").should("have.text", "Login Successful")      
    })

    it("Error", () => {
        cy.get("#username").type("archit")
        cy.get("#password").type("admin1234")
        cy.get("#loginBtn").click()
        //cy.contains("Invalid Username and Password")
        //cy.get("#message").should("have.text", "Invalid Username and Password")
    })
})