function dutyFree(normPrice, discount, hol){
  return( hol / ( normPrice * ( 1-discount ) ) );
}
