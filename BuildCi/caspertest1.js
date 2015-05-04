    casper.test.begin('Login Page test - Valid info', function suite(test) {
        casper.start("https://vsoftiris.asia/iris/#login", function () {
            test.assertTitle("CEFCU Omni Channel", "Login page title is the one expected");
            test.assertExists('form[id="loginForm"]', "Login form is found");
            this.fill('form[id="loginForm"]', {
                'userId': "vsoft6",
                'password': "password!23"
            }, true);
        });

        //casper.then(function () {
          //  this.click("#loginButton");
        //});

        casper.then(function () {
            this.capture('images/image_before_success.png');
        });

        casper.wait(5000, function () {
            casper.then(function () {
                test.assertTitle("CEFCU Omni Channel", "After Login title is ok");

                test.assertUrlMatch(/#acc-overview/, "Success");
            });
            casper.then(function () {
                this.capture('images/image_after_success.png');
            });
        });

        casper.run(function () {
            test.done();
        });
    });
            blankInfo();
            blankUid();
            blankPass();
            userid();
            wrongPass();
            wrongUid();
    function blankInfo() {
        casper.test.begin('Login Page test - Blank info', function suite(test) {
            casper.start("https://vsoftiris.asia/iris/#login", function () {
                test.assertTitle("CEFCU Omni Channel", "Login page title is the one expected");
                test.assertExists('form[id="loginForm"]', "Login form is found");
                this.fill('form[id="loginForm"]', {
                    'userId': "",
                    'password': ""
                }, false);
            });

            casper.then(function () {
                this.click("#loginButton");
            });

            casper.then(function () {
                this.capture('images/image_before_blank.png');
            });

            casper.wait(5000, function () {
                casper.then(function () {
                    test.assertTitle("CEFCU Omni Channel", "After Login title is ok");

                    this.test.assertExists('div.form-group.has-error', 'the element exists');
                });
                casper.then(function () {
                    this.capture('images/image_after_blank.png');
                });
            });

            casper.run(function () {
                test.done();
            });
        });
    }

    function blankUid() {
        casper.test.begin('Login Page test - Blank UserID', function suite(test) {
            casper.start("https://vsoftiris.asia/iris/#login", function () {
                test.assertTitle("CEFCU Omni Channel", "Login page title is the one expected");
                test.assertExists('form[id="loginForm"]', "Login form is found");
                this.fill('form[id="loginForm"]', {
                    'userId': "",
                    'password': "password!23"
                }, false);
            });

            casper.then(function () {
                this.click("#loginButton");
            });

            casper.then(function () {
                this.capture('images/image_before_blank-uid.png');
            });

            casper.wait(5000, function () {
                casper.then(function () {
                    test.assertTitle("CEFCU Omni Channel", "After Login title is ok");
                    this.test.assertVisible('small[data-fv-validator="notEmpty"][data-fv-for="userId"]', 'the Message Visible');
                    this.test.assertNotVisible('small[data-fv-validator="notEmpty"][data-fv-for="password"]', 'the Message Visible');
                });
                casper.then(function () {
                    this.capture('images/image_after_blank-uid.png');
                });
            });

            casper.run(function () {
                test.done();
            });
        });
    }

    function blankPass() {
        casper.test.begin('Login Page test - Blank Password', function suite(test) {
            casper.start("https://vsoftiris.asia/iris/#login", function () {
                test.assertTitle("CEFCU Omni Channel", "Login page title is the one expected");
                test.assertExists('form[id="loginForm"]', "Login form is found");
                this.fill('form[id="loginForm"]', {
                    'userId': "vsoft444",
                    'password': ""
                }, false);
            });

            casper.then(function () {
                this.click("#loginButton");
            });

            casper.then(function () {
                this.capture('images/image_before_blank-pwd.png');
            });

            casper.wait(5000, function () {
                casper.then(function () {
                    test.assertTitle("CEFCU Omni Channel", "After Login title is ok");
                    this.test.assertVisible('small[data-fv-validator="notEmpty"][data-fv-for="password"]', 'the Message for password Visible');
                    this.test.assertNotVisible('small[data-fv-validator="notEmpty"][data-fv-for="userId"]', 'the Message for UserID Not Visible');
                });
                casper.then(function () {
                    this.capture('images/image_after_blank-pwd.png');
                });
            });

            casper.run(function () {
                test.done();
            });
        });
    }

    function userid() {
        casper.test.begin('Login Page test - UserID Length', function suite(test) {
            casper.start("https://vsoftiris.asia/iris/#login", function () {
                test.assertTitle("CEFCU Omni Channel", "Login page title is the one expected");
                test.assertExists('form[id="loginForm"]', "Login form is found");
                this.fill('form[id="loginForm"]', {
                    'userId': "skjdhkjhsfkjshdfhkjfhkshdfkjw",
                    'password': "password!23"
                }, false);
            });

            casper.then(function () {
                this.click("#loginButton");
            });

            casper.then(function () {
                this.capture('images/image_before_uid-length.png');
            });

            casper.wait(5000, function () {
                casper.then(function () {
                    test.assertTitle("CEFCU Omni Channel", "After Login title is ok");
                    this.test.assertNotVisible('small[data-fv-validator="notEmpty"][data-fv-for="password"]', 'the Message for password Visible');
                    this.test.assertNotVisible('small[data-fv-validator="notEmpty"][data-fv-for="userId"]', 'the Message for UserID Not Visible');
                    this.test.assertVisible('small[data-fv-validator="stringLength"][data-fv-for="userId"]', 'the Message for UserID length Visible');
                });
                casper.then(function () {
                    this.capture('images/image_uid-length.png');
                });
            });

            casper.run(function () {
                test.done();
            });
        });
    }

    function wrongPass()
    {
        casper.test.begin('Login Page test - Wrong Password', function suite(test) {
            casper.start("https://vsoftiris.asia/iris/#login", function () {
                test.assertTitle("CEFCU Omni Channel", "Login page title is the one expected");
                test.assertExists('form[id="loginForm"]', "Login form is found");
                this.fill('form[id="loginForm"]', {
                    'userId': "vsoft444",
                    'password': "password!23s"
                }, false);
            });

            casper.then(function () {
                this.click("#loginButton");
            });

            casper.then(function () {
                this.capture('images/image_before_wrong-pwd.png');
            });

            casper.wait(5000, function () {
                casper.then(function () {
                    test.assertTitle("CEFCU Omni Channel", "After Login title is ok");
                    this.test.assertVisible('div[class="noty_message"]', 'the Message for UserID length Visible');
                    this.echo(this.fetchText('span[class="noty_text"]'));
                });
                casper.then(function () {
                    this.capture('images/image_after_wrong-pwd.png');
                });
            });

            casper.run(function () {
                test.done();
            });
        });
    }

    function wrongUid()
    {
        casper.test.begin('Login Page test - Wrong UserID', function suite(test) {
            casper.start("https://vsoftiris.asia/iris/#login", function () {
                test.assertTitle("CEFCU Omni Channel", "Login page title is the one expected");
                test.assertExists('form[id="loginForm"]', "Login form is found");
                this.fill('form[id="loginForm"]', {
                    'userId': "vsoft321",
                    'password': "password!23"
                }, false);
            });

            casper.then(function () {
                this.click("#loginButton");
            });

            casper.then(function () {
                this.capture('images/image_before_wrong-uid.png');
            });

            casper.wait(5000, function () {
                casper.then(function () {
                    test.assertTitle("CEFCU Omni Channel", "After Login title is ok");
                    this.test.assertVisible('div[class="noty_message"]', 'the Message for UserID length Visible');
                    this.echo(this.fetchText('span[class="noty_text"]'));
                });
                casper.then(function () {
                    this.capture('images/image_after_wrong-uid.png');
                });
            });

            casper.run(function () {
                test.done();
            });
        });
    }
