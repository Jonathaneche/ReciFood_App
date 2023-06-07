<template>

<!-- Font -->
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat:wght@600&display=swap" rel="stylesheet">

<body>
    <div class="container">
        <div class="box">
            <input type="checkbox" id="toggle" class="box__toggle" hidden>
            <img src="https://www.dropbox.com/s/u1hx11933jjk7j5/unsplash-bike.jpeg?raw=1" alt="Picture by Autumn Studio" class="box__image">
            <form class="form form--register" action="">
                <h1 class="form__title">Sign up</h1>

                <div class="form__helper">
                    <input type="text" name="user" id="new-user" placeholder="User" class="form__input" />
                    <label class="form__label" for="new-user">User</label>
                </div>

                <div class="form__helper">
                    <input type="email" name="email" id="email" placeholder="Email" class="form__input" />
                    <label class="form__label" for="email">Email</label>
                </div>

                <div class="form__helper">
                    <input type="password" name="password" id="new-user-password" placeholder="Password" class="form__input" />
                    <label class="form__label" for="new-user-password">Password</label>
                </div>

                <div class="form__helper">
                    <input type="password" name="password" id="confirm-password" Placeholder="Confirm password" class="form__input" />
                    <label class="form__label" for="confirm-password">Confirm password</label>
                </div>

                <button type="submit" class="form__button">Register</button>

                <p class="form__text">Already have an account?</p> <label for="toggle" class="form__link">Sign in!</label>
            </form>

            <form class="form form--login" action="">
                <h1 class="form__title">Sign in</h1>

                <div class="form__helper">
                    <input type="text" name="user" id="user" placeholder="User" class="form__input" />
                    <label class="form__label" for="user">User</label>
                </div>

                <div class="form__helper">
                    <input type="password" name="password" id="password" placeholder="Password" class="form__input" />
                    <label class="form__label" for="password">Password</label>
                </div>

                <button type="submit" class="form__button">Login</button>

                <p class="form__text">Don't have an account?</p> <label for="toggle" class="form__link">Sign up!</label>
            </form>
        </div>
    </div>
</body>

</template>

<script setup>

</script>

<style lang="scss" scoped>
$phone: 767px;
$tablet: 768px;

@mixin breakpoint($point) {
    @if $point == untilTablet {
        @media (max-width: $phone) {
            @content;
        }
    }
    @else if $point == tablet {
        @media (min-width: $tablet) {
            @content;
        }
    }
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
}

body {
    background-color: #DDA02C;
}

.container {
    display: grid;
    place-items: center;
    height: 100vh;
}

.box {
    position: relative;
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 600px;
    padding: 220px 20px 20px;
    overflow: hidden;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.3);

    @include breakpoint(tablet) {
        min-height: 400px;
        padding: 0;

        &__toggle:checked+&__image {
            left: 300px;
        }
    }

    @include breakpoint(untilTablet) {
        &__toggle:checked {
            ~.form--register {
                width: 100%;
                height: auto;
                opacity: 1;
            }

            ~.form--login {
                width: 0;
                height: 0;
                opacity: 0;
            }
        }
    }

    &__image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: 0 bottom;
        transition: .4s ease-in-out;

        @include breakpoint(tablet) {
            width: 300px;
            height: 100%;
            object-position: 0 0;
        }
    }
}

.form {
    width: 100%;
    overflow: hidden;
    text-align: left;
    transition: .3s;

    @include breakpoint(tablet) {
        width: 300px;
        padding: 0 20px;
    }

    &__title {
        margin-bottom: 20px;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.8rem;
        font-weight: 700;
    }

    &--login {
        opacity: 1;
        transition: opacity .5s ease;
    }

    &--register {
        width: 0;
        height: 0;
        opacity: 0;
        transition: opacity .5s ease;

        @include breakpoint(tablet) {
            width: 300px;
            height: auto;
            opacity: 1;
        }
    }

    &__helper {
        position: relative;
        margin-bottom: 15px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    &__label {
        position: absolute;
        bottom: 10px;
        left: 0;
        color: black;
        font-family: 'Lato', sans-serif;
        font-size: 1.4rem;
        transition: .3s;
    }

    &__input {
        position: relative;
        width: 100%;
        padding: 5px 0;
        color: black;
        background-color: transparent;
        border-width: 0;
        border-bottom: 1px solid black;
        outline: none;
        font-family: 'Lato', sans-serif;
        font-size: 1.4rem;

        &::placeholder {
            opacity: 0;
        }

        &:not(:placeholder-shown) {
            &+.form__label {
                bottom: 25px;
                color: #2E8E79;
                font-size: 1.2rem;
            }
        }

        &:focus {
            border-bottom-color: #2E8E79;

            &+.form__label {
                bottom: 25px;
                color: #2E8E79;
                font-size: 1.2rem;
            }
        }
    }

    &__button {
        display: block;
        width: 100%;
        margin-top: 20px;
        padding: 10px;
        color: white;
        background-color: #2E8E79;
        border: 0;
        cursor: pointer;
        font-family: 'Lato', sans-serif;
        font-size: 1.2rem;
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    &__text {
        margin-top: 10px;
        font-family: 'Lato', sans-serif;
        font-size: 1.4rem;
    }

    &__link {
        color: #2E8E79;
        cursor: pointer;
    }
}

</style>