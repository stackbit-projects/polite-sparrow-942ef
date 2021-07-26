import React from 'react';
import _ from 'lodash';
import Carousel from 'react-bootstrap/Carousel'

import { withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const image = _.get(section, 'image');
        const imageAlt = _.get(section, 'image_alt');
        const title = _.get(section, 'title');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');

        return (
            <section id={sectionId} className="block hero-block bg-accent outer">
                <div className="inner">
                    {/* <div className="grid">
                        {image && (
                            <div className="cell block-preview">
                                <img src={withPrefix(image)} alt={imageAlt} />
                            </div>
                        )}
                        <div className="cell block-content">
                            {title && <h2 className="block-title underline">{title}</h2>}
                            {content && <div className="block-copy">{markdownify(content)}</div>}
                            {actions && (
                                <div className="block-buttons">
                                    <CtaButtons actions={actions} />
                                </div>
                            )}
                        </div>
                    </div> */}
                    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                </div>
            </section>
        );
    }
}
