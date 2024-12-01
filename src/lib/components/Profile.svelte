<script lang="ts">
    let { DOMloaded = false, ProfileImage = "" } = $props();
</script>

<div class="profile-image-wrapper" class:profile-image-wrapper-show={DOMloaded}>
    <img
        class="profile-image"
        src={ProfileImage}
        loading="eager"
        alt="profile"
        srcset=""
        width="100%"
        height="auto"
    />
</div>

<style lang="scss">
    .profile-image-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        .profile-image {
            height: auto;
            max-height: 90%;
            width: 100%;
            object-fit: contain;
            object-position: center center;
            bottom: 0;
            position: absolute;
            margin-left: 2rem;
        }
    }
    @media (max-width: 1200px) {
        .profile-image-wrapper {
            border-radius: 50%;
            width: 250px;
            height: 250px;
            min-height: 250px;
            min-width: 250px;
            position: absolute;
            transform: translate(-49%, -35%);
            left: 50%;
            top: 50%;
            background: #96c5c8;
            overflow: hidden;
            border: 0.5rem solid #96c5c8;
            .profile-image {
                margin-left: 0;
                height: 20rem;
                width: 100%;
                max-height: 20rem;
                object-position: center 5rem;
            }
        }
    }
    @media (max-width: 480px) {
        .profile-image-wrapper {
            border-radius: 50%;
            width: 220px;
            height: 220px;
            min-height: 220px;
            min-width: 220px;
            position: absolute;
            transform: translate(-49%, -30%);
            left: 50%;
            top: 50%;
            background: #96c5c8;
            overflow: hidden;
            border: 0.5rem solid #96c5c8;
            .profile-image {
                margin-left: 0;
                height: 500px;
                max-height: 500px;
                object-position: center 300px;
            }
        }
    }
</style>
