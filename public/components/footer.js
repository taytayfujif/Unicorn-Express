<Main-Footer>

    <div class="page-footer">

            <div class="container footerContainer">
                
                <div class="row footerRow verticalDivider"> 

                    <div class="col s12 m3 hide-on-small-only column"> 

                        <img src="../assets/Logo_footer.png" alt="A flat illistrated rndom" />

                    </div>

                    <div class="col s12 m3 column"> 

                        <div class="row footerRow"> 

                            <div class="col s12 grey-text text-lighten-1 light">
                                <h6 class="footerSubHeader">
                                    Links
                                </h6>
                            </div>

                            <div class="col s12">

                                <div class="row footerRow"> 

                                    <a href="../html/newArticle.html" class="col s12 grey-text text-lighten-1 light footerContent">Corner Club</a>
                                    <a href="../html/article.html" class="col s12 grey-text text-lighten-1 light footerContent">Games</a>
                                    <a href="../html/newArticle2.html" class="col s12 grey-text text-lighten-1 light footerContent">Home Ownership</a>
                                    <a href="../html/newArticle3.html" class="col s12 grey-text text-lighten-1 light footerContent">Present Saving</a>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col s12 m3 column"> 

                        <div class="row footerRow"> 

                            <div class="col s12 grey-text text-lighten-1 light">
                                <h6 class="footerSubHeader">
                                    Contact
                                </h6>
                            </div>

                            <div class="col s12">

                                <div class="row footerRow"> <!--Level 2 of a inner Row-->

                                    <div href="../html/article.html" class="col s12 grey-text text-lighten-1 light footerContent">
                                        <i class="material-icons left">phone</i>
                                        <span>(808)420-6969</span>
                                    </div>

                                    <div href="../html/article.html" class="col s12 grey-text text-lighten-1 light footerContent">
                                        <i class="material-icons left">mail</i>
                                        <span>placeholder@gmail.com</span>
                                    </div>

                                    <div href="../html/article.html" class="col s12 grey-text text-lighten-1 light footerContent">
                                        <i class="material-icons left">business</i>
                                        <span>1539 N. Calvert</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col s12 m3 column center-align valign-wrapper">
                        <p class="grey-text lighten-1 bold copyright">© Copyright 2019 - The Unicorn Express - All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </div>

        
        <style>
            :scope

            .page-footer {
                padding-top: 5px;
                background: #F3F3F3;
                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
            }

            .page-footer.dropdown > * {
                margin-bottom: 0;
            }
            .footerRow {
                margin-bottom: 0;
            }

            .footerContainer {
                width: 100%;
            }

            .footerSubHeader {
                margin: 0.3rem 0 0.46rem 0;
            }

            .footerSubHeader::after {
                content: ""; 
                display: block; 
                width: 10vh; 
                padding-top: 5px; 
                border-bottom: 0.25px solid #77FFC6;
            }

            .footerContent {
                font-size: 13px;
            }

            .verticalDivider {
                position: relative;
            }

            .verticalDivider:after {
                clear: both;
                content: " ";
                display: block;
                height: 0;
                visibility: hidden;
            }

            .verticalDivider .column:not(:first-child):after, .vertical-divider .columns:not(:first-child):after{
                background:#c3c3c3;
                bottom: 0;
                height: 50%;
                content: " ";
                margin-left: -5%;
                position: absolute;
                top: 25%;
                width: 1px;
            }

            .copyright {
                font-size: 10px;
                font-weight: bold;
            }

        </style>

</Main-Footer>

