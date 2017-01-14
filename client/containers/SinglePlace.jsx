import React from 'react';
import { connect } from 'react-redux';
import Recommend from '../components/Recommend.jsx';
import { show, hide } from 'redux-modal';
import { updatePlaces } from '../actions/action_get_places';
import { rejectListing, updateListing, toggleDetails, addToBlacklist, addToWishlist, addToVisited, fetchVenueDetails, finishVenueDetails, throttle_rejectListing, throttle_blacklist, throttle_wishlist } from '../actions/action_single_place';


function mapStateToProps (state) {
  return {
    places: state.currentPlacesList.places,
    singleListing: state.currentPlacesList.singleListing,
    rejectedList: state.rejectedList,
    showDetails: state.currentPlacesList.showDetails,
    listingIndex: state.currentPlacesList.listingIndex,
    nextPage: state.currentPlacesList.nextPage,
    map: state.map,
    user: state.user,
    isFetchingDetails: state.currentPlacesList.fetchingDetail,
    routeInfo: state.currentPlacesList.routeInfo
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    rejectListing: (listing) => {dispatch(rejectListing(listing))},
    updateListing: (listing) => {dispatch(updateListing(listing))},
    toggleDetails: () => {dispatch(toggleDetails())},
    addToBlacklist: (listing) => {dispatch(addToBlacklist(listing))},
    addToWishlist: (listing) => {dispatch(addToWishlist(listing))},
    addToVisited: (listing) => {dispatch(addToVisited(listing))},
    openModal: (modal) => {dispatch(show(modal))},
    hideModal: (modal) => {dispatch(hide(modal))},
    fetchVenueDetails: () => {dispatch(fetchVenueDetails())},
    finishVenueDetails: (bool) => {dispatch(finishVenueDetails(bool))},
    throttle_rejectListing: () => {dispatch(throttle_rejectListing())},
    throttle_blacklist: () => {dispatch(throttle_blacklist())},
    throttle_wishlist: () => {dispatch(throttle_wishlist())}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
