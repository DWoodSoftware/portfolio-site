export type LavaTone = "cobalt" | "orange";

interface LavaMassConfig {
  x: number;
  y: number;

  velocityX: number;
  velocityY: number;

  radius: number;
  tone: LavaTone;
}

export class LavaMass {
  public x: number;
  public y: number;

  public velocityX: number;
  public velocityY: number;

  public readonly radius: number;
  public readonly tone: LavaTone;

  public compressionX = 1;
  public compressionY = 1;

  public constructor({
    x,
    y,
    velocityX,
    velocityY,
    radius,
    tone,
  }: LavaMassConfig) {
    this.x = x;
    this.y = y;

    this.velocityX = velocityX;
    this.velocityY = velocityY;

    this.radius = radius;
    this.tone = tone;
  }

  public update(deltaTime: number) {
    this.x += this.velocityX * deltaTime;
    this.y += this.velocityY * deltaTime;

    const wallInset = this.radius * 0.35;

    const min = wallInset;
    const max = 1 - wallInset;

    const collisionZone = this.radius * 0.45;

    let targetCompressionX = 1;
    let targetCompressionY = 1;

    /*
     * Horizontal wall proximity.
     *
     * Start deforming before actually reaching the wall,
     * rather than changing shape in a single frame.
     */

    const distanceToLeft = this.x - min;
    const distanceToRight = max - this.x;
    const horizontalProximity = Math.min(
        distanceToLeft,
        distanceToRight,
    );

    if (horizontalProximity < collisionZone) {
        const impact =
            1 -
            Math.max(horizontalProximity, 0) /
                collisionZone;

        targetCompressionX = 1 - impact * 0.28;
        targetCompressionY = 1 + impact * 0.18;
    }
    /*
   * Vertical wall proximity.
   */
    const distanceToBottom = this.y - min;
    const distanceToTop = max - this.y;
    const verticalProximity = Math.min(
        distanceToBottom,
        distanceToTop,
    );

    if (verticalProximity < collisionZone) {
        const impact =
            1 -
            Math.max(verticalProximity, 0) /
                collisionZone;

        targetCompressionY = Math.min(
            targetCompressionY,
            1 - impact * 0.28,
        );

        targetCompressionX = Math.max(
            targetCompressionX,
            1 + impact * 0.18,
        );
    }

    /*
    * Actual collision.
    *
    * Position is constrained, velocity reverses,
    * and a little energy is lost.
    */
    if (this.x < min) {
        this.x = min;
        this.velocityX = Math.abs(this.velocityX) * 0.94;
    } else if (this.x > max) {
        this.x = max;
        this.velocityX = -Math.abs(this.velocityX) * 0.94;
    }

    if (this.y < min) {
        this.y = min;
        this.velocityY = Math.abs(this.velocityY) * 0.94;
    } else if (this.y > max) {
        this.y = max;
        this.velocityY = -Math.abs(this.velocityY) * 0.94;
    }

    /*
    * Smoothly interpolate toward the desired shape.
    *
    * This removes the single-frame "glitch squish".
    */
    const deformationSpeed = 8;
    const interpolation = 1 - Math.exp(-deformationSpeed * deltaTime);

    this.compressionX += (targetCompressionX - this.compressionX) * interpolation;
    this.compressionY += (targetCompressionY - this.compressionY) * interpolation;
    }
}