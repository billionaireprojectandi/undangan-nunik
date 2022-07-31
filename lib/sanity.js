import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";

const config = {
  projectId: "jba15rnp",
  dataset: "production",
  token:
    "skc8U7dsP5ZYS1fRYjSQVxBfi2b9nZuHQCoB4IodVylaurLvUMZBtv8csvkPdegfFfnhWwqw2QhlTKZ0KFIOZR5kInag1jA1CjPjiBhxu74DvlUm71sWMIBt1OHW6H7jYU0OWOhbBQiptzBfohXG90Mwxzlm9936Mhxzo3DzMpwV3GJLUB84",
  apiVersion: "2021-10-21",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
