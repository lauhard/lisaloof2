<script lang="ts">
    let {
        id = "",
        labelText = "label text",
        disabled = false,
        checked = false,
        required = false,
        classNames = "",
    } = $props();
</script>

<label class=" {classNames}" for={id}>
    <input type="checkbox" {id} name={id} {disabled} {checked} {required} />
    {labelText}
</label>

<style lang="scss">
</style>
