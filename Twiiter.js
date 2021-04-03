

var tweetOnclick = document.getElementById ("AnotherTweet"),
    tweetButton = document.getElementById("TweetButton"),
    tweetValue = document.getElementById("TweetInput"),
    datE = document.getElementById("Date3");


            tweetButton.onclick = function () {
                "use strict"


         document.getElementById("TweetContent3").innerText  = tweetValue.value

         tweetOnclick.classList.remove("AnotherTweet");
            }


            var searchInputBg = document.getElementById("SearchInput")

                searchInputBg.onclick = function () {

                    "use strict"

                        searchInputBg.classList.add("SearchInputOnClick")
                }  




            var likeHover = document.getElementById("Like"),
                redLike = document.getElementById("RedLike"),
                likeCount = document.getElementById("LikeCount");

            likeHover.onclick = function () {

                "use strict"

                            likeHover.classList.remove("Like")

                            redLike.classList.add("Like")       
                            
                            likeCount.classList.add("LikeCount")

            }

            var reTweet = document.getElementById("Retweet"),
                greenRetweet = document.getElementById("Green-retweet") ,
                reTweetcount = document.getElementById("RetweetCount");
                


                reTweet.onclick = function () {

                    "use strict"

                    reTweet.classList.remove("Retweet")
                    greenRetweet.classList.add("Retweet")
                    reTweetcount.classList.add("RetweetCount")
                    
                }
                

            


           
