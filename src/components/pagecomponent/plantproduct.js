import React from 'react'

 function Plantproduct() {
    
  return (
    <div>
       <div class="container py-5">
        {/* <!-- Top Bar --> */}
        <div class="d-flex justify-content-between align-items-center mb-4">
           <center>
            <h4 class="mb-0">Plant Collection</h4>
            </center>
            <div class="d-flex gap-2 align-items-center">
                <span class="text-muted">Sort by:</span>
                <button class="sort-btn">
                    Newest <i class="bi bi-chevron-down ms-2"></i>
                </button>
            </div>
        </div>

        <div class="row g-4">
            {/* <!-- Filters Sidebar --> */}
            <div class="col-lg-3">
                <div class="filter-sidebar p-4 shadow-sm">
                    <div class="filter-group">
                        <h6 class="mb-3">Categories</h6>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" id="accessories"/>
                            <label class="form-check-label" for="accessories">
                                Flowers
                            </label>
                        </div>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" id="electronics"/>
                            <label class="form-check-label" for="electronics">
                                Indoor
                            </label>
                        </div>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" id="clothing"/>
                            <label class="form-check-label" for="clothing">
                                Outdoor
                            </label>
                        </div>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" id="accessories"/>
                            <label class="form-check-label" for="accessories">
                                Aquatic
                            </label>
                        </div>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" id="accessories"/>
                            <label class="form-check-label" for="accessories">
                                Creepers
                            </label>
                        </div>
                    </div>

                    <div class="filter-group">
                        <h6 class="mb-3">Price Range</h6>
                        <input type="range" class="form-range" min="0" max="1000" value="500"/>
                        <div class="d-flex justify-content-between">
                            <span class="text-muted">00Rs</span>
                            <span class="text-muted">1000Rs</span>
                        </div>
                    </div>
                    <div class="filter-group">
                        <h6 class="mb-3">Rating</h6>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="rating" id="rating4"/>
                            <label class="form-check-label" for="rating4">
                                <i class="bi bi-star-fill text-warning"></i> 4 & above
                            </label>
                        </div>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="rating" id="rating3"/>
                            <label class="form-check-label" for="rating3">
                                <i class="bi bi-star-fill text-warning"></i> 3 & above
                            </label>
                        </div>
                    </div>

                    <button class="btn btn-outline-primary w-100">Apply Filters</button>
                </div>
            </div>

            {/* <!-- Product Grid --> */}
            <div class="col-lg-9">
                <div class="row g-4">
                    {/* <!-- Product Card 1 --> */}
                    <div class="col-md-4">
                        <div class="product-card shadow-sm">
                            <div class="position-relative">
                                <img src="./Assets/images/plant01.jpg" class="product-image w-100" alt="Product"/>
                                <span class="discount-badge">-30%</span>
                                <button class="wishlist-btn">
                                    <i class="bi bi-heart"></i>
                                </button>
                            </div>
                            <div class="p-3">
                                <span class="category-badge mb-2 d-inline-block">Indoor Plants</span>
                                <h6 class="mb-1">Bonsai</h6>
                                <div class="rating-stars mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star"></i>
                                    <span class="text-muted ms-2">(4.0)</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">1229.99 Rs</span>
                                    <button class="btn cart-btn">
                                        <i class="bi bi-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Product Card 2 --> */}
                    <div class="col-md-4">
                        <div class="product-card shadow-sm">
                            <div class="position-relative">
                                <img src="./Assets/images/plant02.jpg" class="product-image w-100" alt="Product"/>
                                <span class="discount-badge">-25%</span>
                                <button class="wishlist-btn">
                                    <i class="bi bi-heart"></i>
                                </button>
                            </div>
                            <div class="p-3">
                                <span class="category-badge mb-2 d-inline-block">Outdoor</span>
                                <h6 class="mb-1">Snake plant</h6>
                                <div class="rating-stars mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star"></i>
                                    <span class="text-muted ms-2">(4.0)</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">199.99 Rs</span>
                                    <button class="btn cart-btn">
                                        <i class="bi bi-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Product Card 3 --> */}
                    <div class="col-md-4">
                        <div class="product-card shadow-sm">
                            <div class="position-relative">
                                <img src="./Assets/images/plant03.jpg" class="product-image w-100" alt="Product"/>
                                <span class="discount-badge">-15%</span>
                                <button class="wishlist-btn">
                                    <i class="bi bi-heart"></i>
                                </button>
                            </div>
                            <div class="p-3">
                                <span class="category-badge mb-2 d-inline-block">Flowers</span>
                                <h6 class="mb-1">Palm Plant</h6>
                                <div class="rating-stars mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <span class="text-muted ms-2">(5.0)</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">359.99 Rs</span>
                                    <button class="btn cart-btn">
                                        <i class="bi bi-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                     {/* <!-- Product Card 4 --> */}
                     <div class="col-md-4">
                        <div class="product-card shadow-sm">
                            <div class="position-relative">
                                <img src="./Assets/images/plant04.jpg" class="product-image w-100" alt="Product"/>
                                <span class="discount-badge">-25%</span>
                                <button class="wishlist-btn">
                                    <i class="bi bi-heart"></i>
                                </button>
                            </div>
                            <div class="p-3">
                                <span class="category-badge mb-2 d-inline-block">Plants </span>
                                <h6 class="mb-1">Indoor show plant </h6>
                                <div class="rating-stars mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <span class="text-muted ms-2">(5.0)</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">650.00 Rs</span>
                                    <button class="btn cart-btn">
                                        <i class="bi bi-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Product Card 5 --> */}
                    <div class="col-md-4">
                        <div class="product-card shadow-sm">
                            <div class="position-relative">
                                <img src="./Assets/images/plant05.jpg" class="product-image w-100" alt="Product"/>
                                <span class="discount-badge">-10%</span>
                                <button class="wishlist-btn">
                                    <i class="bi bi-heart"></i>
                                </button>
                            </div>
                            <div class="p-3">
                                <span class="category-badge mb-2 d-inline-block">Flowers  </span>
                                <h6 class="mb-1">Flowering Plants  </h6>
                                <div class="rating-stars mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-half"></i>
                                    <span class="text-muted ms-2">(4.2)</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">120.00 Rs</span>
                                    <button class="btn cart-btn">
                                        <i class="bi bi-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- More product cards can be added here -->
                      <!-- Product Card 6 --> */}
                      <div class="col-md-4">
                        <div class="product-card shadow-sm">
                            <div class="position-relative">
                                <img src="./Assets/images/plant06.jpg" class="product-image w-100" alt="Product"/>
                                <span class="discount-badge">-25%</span>
                                <button class="wishlist-btn">
                                    <i class="bi bi-heart"></i>
                                </button>
                            </div>
                            <div class="p-3">
                                <span class="category-badge mb-2 d-inline-block">Plants </span>
                                <h6 class="mb-1">Aloe Vera </h6>
                                <div class="rating-stars mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <span class="text-muted ms-2">(5.0)</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">100.00 Rs</span>
                                    <button class="btn cart-btn">
                                        <i class="bi bi-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                      {/* <!-- Product Card 7 --> */}
                      <div class="col-md-4">
                        <div class="product-card shadow-sm">
                            <div class="position-relative">
                                <img src="./Assets/images/plant07.jpg" class="product-image w-100" alt="Product"/>
                                <span class="discount-badge">-5%</span>
                                <button class="wishlist-btn">
                                    <i class="bi bi-heart"></i>
                                </button>
                            </div>
                            <div class="p-3">
                                <span class="category-badge mb-2 d-inline-block">Fruits </span>
                                <h6 class="mb-1">Small Oranges</h6>
                                <div class="rating-stars mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star"></i>
                                    <span class="text-muted ms-2">(5.0)</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">1000.00 Rs</span>
                                    <button class="btn cart-btn">
                                        <i class="bi bi-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                      {/* <!-- Product Card 8 --> */}
                      <div class="col-md-4">
                        <div class="product-card shadow-sm">
                            <div class="position-relative">
                                <img src="./Assets/images/plant08.jpg" class="product-image w-100" alt="Product"/>
                                <span class="discount-badge">-10%</span>
                                <button class="wishlist-btn">
                                    <i class="bi bi-heart"></i>
                                </button>
                            </div>
                            <div class="p-3">
                                <span class="category-badge mb-2 d-inline-block">Creepers </span>
                                <h6 class="mb-1">Little Creeper </h6>
                                <div class="rating-stars mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <span class="text-muted ms-2">(5.0)</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">149.00 Rs</span>
                                    <button class="btn cart-btn">
                                        <i class="bi bi-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                      {/* <!-- Product Card 9 --> */}
                      <div class="col-md-4">
                        <div class="product-card shadow-sm">
                            <div class="position-relative">
                                <img src="./Assets/images/plant09.jpg" class="product-image w-100" alt="Product"/>
                                <span class="discount-badge">-75%</span>
                                <button class="wishlist-btn">
                                    <i class="bi bi-heart"></i>
                                </button>
                            </div>
                            <div class="p-3">
                                <span class="category-badge mb-2 d-inline-block">Flowers </span>
                                <h6 class="mb-1">Flowering  </h6>
                                <div class="rating-stars mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <span class="text-muted ms-2">(2.0)</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">150.00 Rs</span>
                                    <button class="btn cart-btn">
                                        <i class="bi bi-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Plantproduct;