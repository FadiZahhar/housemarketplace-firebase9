import React from 'react'
import { Link} from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/rentCategoryImage.jpg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        {/* slider */}

        <p className="exploreCateogryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to='/cateogry/rent'>
            <img src={rentCategoryImage}
            alt='rent'
            className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Place for rent</p>
          </Link>
          <Link to='/category/sell'>
            <img
             src={sellCategoryImage}
             alt='sell'
             className='exploreCategoryImg'
             />
             <p className='exploreCategoryName'>Places for rent</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore