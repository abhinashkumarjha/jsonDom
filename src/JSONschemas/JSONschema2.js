const schema = {
    type: "array",
    minItems: 2,
    title: "choice list from schema 2",
    items: {
      type: "string",
      enum: ["foo", "bar", "fuzz", "qux"],
    },
    uniqueItems: true
};
  
const uiSchema = {
    "ui:widget": "checkboxes",
    "ui:options": {
        inline: true
    }
};

export {
    schema,
    uiSchema
}