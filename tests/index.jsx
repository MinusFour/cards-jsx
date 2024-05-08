import jsx from '../src/index.js';
/*
function render(){
    return (
        <cards version="2">
            <card>
                <card-header title="Hello world" />
                <sections>
                    <section
                        collapsible={false}
                        uncollapsibleWidgetsCount={0}
                        header="Another header"
                    >
                        <widgets>
                            <widget>
                            <selection-input
                                    name="test"
                                    label="test"
                                    type="DROPDOWN"
                                >
                                    <action func="test">
                                        <parameters>
                                            <parameter key="test" value="otherTest"/>
                                        </parameters>
                                    </action>
                                    <options>
                                        <option>
                                            Test
                                        </option>
                                    </options>
                                </selection-input>
                            </widget>
                        </widgets>
                    </section>
                </sections>
            </card>
        </cards>
    )
}*/

function Card({ children }){
    return (
        <cards version="2">
            <card>
                { children }
            </card>
        </cards>
    );
};

function otherRender(){
    return (
        <Card>
            <card-header title="Hello world" />
            <sections>
                <section
                    collapsible={false}
                    uncollapsibleWidgetsCount={0}
                    header="Another header"
                >
                    <widgets>
                        <widget>
                            <selection-input
                                name="test"
                                label="test"
                                type="DROPDOWN"
                            >
                                <action func="test">
                                    <parameters>
                                        <parameter key="test" value="otherTest"/>
                                    </parameters>
                                </action>
                                <options>
                                    <option>
                                        Test
                                    </option>
                                </options>
                            </selection-input>
                        </widget>
                        <widget>
                            <text-paragraph>
                                This is text that will show up in the widget
                            </text-paragraph>
                        </widget>
                    </widgets>
                </section>
            </sections>
        </Card>
    )
}

console.log(JSON.stringify(otherRender(), null, '  '));
