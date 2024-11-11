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
</style>
