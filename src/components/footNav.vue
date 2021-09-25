<template>
  <nav>
    <router-link to="/" class="navButton">
        <svg>
          <use xlink:href="@/assets/img/home.svg#home"/>
        </svg>
      <p>ホーム</p>
    </router-link>
      <router-link to="/collection" class="navButton">
        <svg>
          <use xlink:href="@/assets/img/search.svg#search"/>
        </svg>
        <p>コレクション</p>
      </router-link>
      <router-link to="/coupons" class="navButton">
        <svg>
          <use xlink:href="@/assets/img/coupon.svg#coupon"/>
        </svg>
      <p>クーポン</p>
      </router-link>
      <router-link to="/profile" class="navButton">
        <svg>
          <use xlink:href="@/assets/img/profile.svg#profile"/>
        </svg>
        <p>プロフィール</p>
      </router-link>
  </nav>
</template>

<style>

nav{
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 70px;
  box-shadow: 0px -2px 10px;
  background-color: rgba(235, 235, 235, 0.986);
  z-index: 999;
}

.navButton{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100%;
  text-decoration: none;
  color: #A1CE63;
}

.navButton a{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}



.navButton img{
  height: 30px;
}

.navButton svg{
  width: 100%;
  height: 30px;
  fill: #A1CE63;
}

.router-link-active {
  color: #3B933B;
}

.router-link-active svg{
  fill: #3B933B;
}

</style>