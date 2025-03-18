<script setup>
import { ref } from "vue";

const isDark = ref(false);
function themeSwitcher() {
    isDark.value === false
        ? (document.body.dataset.theme = "dark")
        : (document.body.dataset.theme = "light");
}
</script>

<template>
    <header class="header">
        <div class="header__container container">
            <nav class="header__nav">
                <div class="header__logo">
                    <svg
                        id="logo-40"
                        width="171"
                        height="32"
                        viewBox="0 0 171 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M67.5821 6.28395H64V22.4472H73.9164V19.2801H67.5821V6.28395Z"
                            fill="#4845D2"
                            class="ccustom"
                        ></path>
                        <path
                            d="M74.2585 16.9648C74.2585 20.4159 76.5738 22.7093 80.0685 22.7093C83.5414 22.7093 85.8567 20.4159 85.8567 16.9648C85.8567 13.5137 83.5414 11.1984 80.0685 11.1984C76.5738 11.1984 74.2585 13.5137 74.2585 16.9648ZM77.644 16.9429C77.644 15.3048 78.6051 14.2127 80.0685 14.2127C81.5101 14.2127 82.4712 15.3048 82.4712 16.9429C82.4712 18.603 81.5101 19.6951 80.0685 19.6951C78.6051 19.6951 77.644 18.603 77.644 16.9429Z"
                            fill="#4845D2"
                            class="ccustom"
                        ></path>
                        <path
                            d="M86.3978 16.7901C86.3978 20.0882 88.5384 22.3161 91.5744 22.3161C93.0379 22.3161 94.3047 21.7919 94.9381 20.9401V22.4472C94.9381 23.9543 93.9989 24.959 92.3389 24.959C90.8536 24.959 89.827 24.2601 89.7615 23.0151H86.3541C86.6599 26.0075 88.9752 28.0169 92.1423 28.0169C95.8773 28.0169 98.2363 25.5925 98.2363 21.7482V11.5261H95.2002L95.0255 12.64C94.4139 11.7445 93.1252 11.1548 91.64 11.1548C88.582 11.1548 86.3978 13.4482 86.3978 16.7901ZM89.8052 16.7027C89.8052 15.13 90.8536 14.0816 92.186 14.0816C93.7368 14.0816 94.8726 15.1082 94.8726 16.7027C94.8726 18.2972 93.7586 19.3893 92.2078 19.3893C90.8755 19.3893 89.8052 18.2972 89.8052 16.7027Z"
                            fill="#4845D2"
                            class="ccustom"
                        ></path>
                        <path
                            d="M99.2166 16.9648C99.2166 20.4159 101.532 22.7093 105.027 22.7093C108.5 22.7093 110.815 20.4159 110.815 16.9648C110.815 13.5137 108.5 11.1984 105.027 11.1984C101.532 11.1984 99.2166 13.5137 99.2166 16.9648ZM102.602 16.9429C102.602 15.3048 103.563 14.2127 105.027 14.2127C106.468 14.2127 107.429 15.3048 107.429 16.9429C107.429 18.603 106.468 19.6951 105.027 19.6951C103.563 19.6951 102.602 18.603 102.602 16.9429Z"
                            fill="#4845D2"
                            class="ccustom"
                        ></path>
                        <path
                            d="M113.715 9.82239C114.763 9.82239 115.615 8.97054 115.615 7.90027C115.615 6.83 114.763 6 113.715 6C112.645 6 111.793 6.83 111.793 7.90027C111.793 8.97054 112.645 9.82239 113.715 9.82239ZM112.011 22.4472H115.397V11.5261H112.011V22.4472Z"
                            fill="#4845D2"
                            class="ccustom"
                        ></path>
                        <path
                            d="M117.368 27.6893H120.688V21.3551C121.321 22.1851 122.763 22.753 124.27 22.753C127.524 22.753 129.49 20.263 129.403 16.8119C129.315 13.2953 127.284 11.1766 124.248 11.1766C122.697 11.1766 121.234 11.8537 120.622 12.8585L120.447 11.5261H117.368V27.6893ZM120.753 16.9866C120.753 15.3485 121.845 14.2564 123.418 14.2564C125.012 14.2564 126.017 15.3703 126.017 16.9866C126.017 18.603 125.012 19.7169 123.418 19.7169C121.845 19.7169 120.753 18.6248 120.753 16.9866Z"
                            fill="#4845D2"
                            class="ccustom"
                        ></path>
                        <path
                            d="M129.761 18.9961C129.848 21.2022 131.596 22.7311 134.348 22.7311C136.991 22.7311 138.826 21.3332 138.826 19.0835C138.826 17.4672 137.865 16.3969 136.073 15.96L134.13 15.4795C133.431 15.3048 132.994 15.13 132.994 14.5621C132.994 13.9942 133.452 13.6229 134.13 13.6229C134.894 13.6229 135.396 14.1253 135.375 14.8679H138.411C138.323 12.5963 136.598 11.1766 134.195 11.1766C131.771 11.1766 129.958 12.6182 129.958 14.8024C129.958 16.2658 130.766 17.4672 132.928 18.0351L134.85 18.5374C135.418 18.6903 135.658 18.9524 135.658 19.3237C135.658 19.8698 135.156 20.2193 134.304 20.2193C133.321 20.2193 132.797 19.7606 132.797 18.9961H129.761Z"
                            fill="#4845D2"
                            class="ccustom"
                        ></path>
                        <path
                            d="M143.974 22.7311C145.307 22.7311 146.639 22.1195 147.316 21.224L147.535 22.4472H150.702V11.5261H147.338V17.2051C147.338 18.8432 146.858 19.7387 145.307 19.7387C144.105 19.7387 143.319 19.1927 143.319 17.1614V11.5261H139.955V18.3845C139.955 20.9838 141.397 22.7311 143.974 22.7311Z"
                            fill="#4845D2"
                            class="ccustom"
                        ></path>
                        <path
                            d="M156.036 22.4472V16.4843C156.036 14.6495 157.019 14.1253 157.98 14.1253C159.05 14.1253 159.749 14.7806 159.749 16.1348V22.4472H163.069V16.4843C163.069 14.6277 164.03 14.1035 164.991 14.1035C166.061 14.1035 166.782 14.7587 166.782 16.1348V22.4472H170.059V15.3048C170.059 12.8148 168.748 11.1548 165.93 11.1548C164.358 11.1548 163.069 11.9192 162.501 13.0987C161.846 11.9192 160.71 11.1548 158.897 11.1548C157.696 11.1548 156.582 11.7008 155.927 12.5745L155.796 11.5261H152.65V22.4472H156.036Z"
                            fill="#4845D2"
                            class="ccustom"
                        ></path>
                        <path
                            d="M0 16C0 7.16344 7.16344 0 16 0H37C45.8366 0 53 7.16344 53 16V32H16C7.16344 32 0 24.8366 0 16Z"
                            fill="#4845D2"
                            class="ccustom"
                        ></path>
                        <rect
                            x="6"
                            y="6"
                            width="41"
                            height="20"
                            rx="10"
                            fill="#A5B4FC"
                            class="ccompli2"
                        ></rect>
                        <circle cx="16" cy="16" r="5" fill="#000000"></circle>
                        <circle cx="14" cy="14" r="1" fill="#ffffff"></circle>
                        <circle cx="38" cy="16" r="5" fill="#000000"></circle>
                        <circle cx="36" cy="14" r="1" fill="#ffffff"></circle>
                    </svg>
                </div>

                <div class="header__actions">
                    <div class="header__search search">
                        <input
                            placeholder="Search"
                            id="input"
                            class="search__input"
                            name="text"
                            type="text"
                        />

                        <label class="search__label" for="input">
                            <svg class="search__icon" viewBox="0 0 512 512">
                                <path
                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div class="divider"></div>
                    <div class="theme-switcher">
                        <input
                            type="checkbox"
                            class="theme-switcher__input"
                            id="theme"
                            v-model="isDark"
                            @click="themeSwitcher"
                        />
                        <label for="theme" class="theme-switcher__label">
                            <span class="sun">
                                <i class="ri-sun-fill"></i>
                            </span>
                            <span class="moon">
                                <i class="ri-moon-clear-fill"></i>
                            </span>
                            <span class="theme-switcher__ball"></span>
                        </label>
                    </div>
                    <button type="button" class="btn btn--primary">
                        Login
                    </button>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/utils" as u;

.header {
    &__container {
        padding-block: 1em;
    }
    &__nav {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    &__actions {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;
        .search {
            width: 50%;
        }
    }

    .search {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        padding-left: 15px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
        .search__input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            font-size: 0.9em;
            caret-color: rgb(255, 81, 0);
        }

        &__label {
            cursor: text;
            padding: 0px 12px;
        }

        &__icon {
            & path {
                fill: rgb(114, 114, 114);
            }
            width: 13px;
        }
    }
}

.theme-switcher {
    --height: 32px;
    --ball-size: 24px;
    --icon-color: rgb(237, 201, 0);
    --color-change: all 0.2s linear;
    position: relative;

    &__input {
        width: 0;
        height: 0;
        opacity: 0;
        position: absolute;
    }

    &__label {
        position: relative;
        background-color: var(--color-offWhite);
        width: 70px;
        height: var(--height);
        border-radius: 50px;
        padding: 8px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .moon {
        color: #000000;
        z-index: 2;
        transition: var(--color-change);
    }

    .sun {
        color: var(--icon-color);
        z-index: 2;
        transition: var(--color-change);
    }

    &__label &__ball {
        background-color: #ffffff;
        width: var(--ball-size);
        height: var(--ball-size);
        position: absolute;
        left: 4px;
        top: 50%;
        transform: translate(0, -50%);
        border-radius: 50%;
        transition: var(--color-change);
    }

    &__input:checked {
        & + .theme-switcher__label .theme-switcher__ball {
            left: calc(100% - var(--ball-size) - 4px);
            background-color: black;
        }
        & + .theme-switcher__label .sun {
            color: black;
        }
        & + .theme-switcher__label .moon {
            color: var(--icon-color);
        }
    }
}

@include u.respond-to("lg") {
    .header__actions {
        .header__search {
            width: max(180px, 50%);
        }
        .theme-switcher {
            display: none;
        }

        button {
            display: none;
        }
    }
}
</style>
