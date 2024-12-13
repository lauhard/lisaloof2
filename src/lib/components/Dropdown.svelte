<script lang="ts">
    export let id: string = "dropdown";
    export let required = true;
    export let tabindex = 1;
    export let options = [
        {
            id: 1,
            key: "Rauchentwöhnung",
            value: "Rauchentwöhnung",
        },
        {
            id: 2,
            key: "Tiefenentspannung",
            value: "Tiefenentspannung",
        },
        {
            id: 3,
            key: "Digital-Detox",
            value: "Digital-Detox",
        },
        {
            id: 4,
            key: "Entspannt-Vortragen-Entspannt-in-die-Prüfung",
            value: "Entspannt Vortragen/ Entspannt in die Prüfung",
        },
        {
            id: 5,
            key: "Online-Hypnose",
            value: "Online Hypnose",
        },
        {
            id: 6,
            key: "Psychologische-Beratung",
            value: "Psychologische Beratung",
        },
        {
            id: 7,
            key: "sonstiges",
            value: "Sonstige Anfragen",
        },
    ];
</script>

<select {id} {required} {tabindex} on:change name={id}>
    <option value="" selected hidden></option>
    {#each options as option}
        <option value={option.key}>{option.value}</option>
    {/each}
</select>

<style lang="scss">
</style>
