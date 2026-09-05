export class GamepadController extends EventTarget {
  static Keydown = "keydown";
  static Pressed = "pressed";
  static AxisMove = "axisMove";

  constructor() {
    super();
    this.buttonStates = {};
    this.init();
  }

  init() {
    window.addEventListener("gamepadconnected",(event) => {
      console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        event.gamepad.index,event.gamepad.id,event.gamepad.buttons.length,event.gamepad.axes.length);
    });

    window.addEventListener("gamepaddisconnected",(event) => {
      console.log("Gamepad disconnected from index %d: %s",event.gamepad.index,event.gamepad.id);
    });

    this.updateGamepadStatus();
  }

  updateGamepadStatus() {
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];

    for (let i = 0; i < gamepads.length; i++) {
      const gamepad = gamepads[i];

      if (gamepad) {
        // Check button states
        for (let j = 0; j < gamepad.buttons.length; j++) {
          const button = gamepad.buttons[j];

          if (button.pressed) {
            // Handle button press
            if (!this.buttonStates[gamepad.index]?.[j]) {
              // Button keydown event
              this.dispatchEvent(new CustomEvent(GamepadController.Keydown,{
                detail: [gamepad.index,j,button.value]
              }));

              if (!this.buttonStates[gamepad.index]) {
                this.buttonStates[gamepad.index] = [];
              }
              this.buttonStates[gamepad.index][j] = true;
            }

            // Button pressed event
            this.dispatchEvent(new CustomEvent(GamepadController.Pressed,{
              detail: [gamepad.index,j,button.value]
            }));
          } else {
            // Button released
            if (!this.buttonStates[gamepad.index]) {
              this.buttonStates[gamepad.index] = [];
            }
            this.buttonStates[gamepad.index][j] = false;
          }
        }

        // Check axis movements
        for (let k = 0; k < gamepad.axes.length; k++) {
          this.dispatchEvent(new CustomEvent(GamepadController.AxisMove,{
            detail: [gamepad.index,k,gamepad.axes[k]]
          }));
        }
      }
    }

    requestAnimationFrame(() => this.updateGamepadStatus());
  }
}