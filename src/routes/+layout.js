export const prerender = true;

export async function load({fetch}) {
    await fetch("/test").then(r => r.json());
}