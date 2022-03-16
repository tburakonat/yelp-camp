const express = require("express")
const router = express.Router({mergeParams: true});
// mergeParams must be true to get the id of the campground which is prefixed in the app.js file

const catchAsync = require("../utilities/catchAsync");
const reviews = require("../controllers/reviews");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware");

router.post("/", isLoggedIn, validateReview, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;