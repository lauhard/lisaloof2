<script lang="ts">
    export let id = "";
    export let labelText = "label text";
    export let disabled = false;
    export let checked = false;
    export let required = false;
    export let classNames = "";
</script>

<label class=" {classNames}" for={id}>
    <input type="checkbox" {id} name={id} {disabled} {checked} {required} />
    {labelText}
</label>

<style lang="scss">
</style>
